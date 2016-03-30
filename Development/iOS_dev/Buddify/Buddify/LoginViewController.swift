//
//  LoginViewController.swift
//  Buddify
//
//  Created by Christoph Rehbichler on 27/02/16.
//  Copyright © 2016 Christoph Rehbichler. All rights reserved.
//

import UIKit

import FBSDKCoreKit
import FBSDKLoginKit

class LoginViewController: UIViewController, UITextFieldDelegate, FBSDKLoginButtonDelegate, LoginRegisterDelegate {

  @IBOutlet weak var name: UITextField!
  @IBOutlet weak var password: UITextField!
  
  @IBOutlet weak var nameView: UIView!
  
  @IBOutlet weak var fbLoginButton: FBSDKLoginButton!
  
  @IBOutlet weak var or: UILabel!
  
  @IBOutlet weak var signUp: UIButton!
  
  @IBOutlet weak var bottomConstraint: NSLayoutConstraint!
  
  var originConstraint : CGFloat!

  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
    fbLoginButton.delegate = self
    
    loginRegisterDelegate = self
    
    // View controller-based NavBar configuration
    navigationController?.navigationBarHidden = true
    
    // Shadows for input field
    makeShadow(nameView)
    
    // Keyboard Notification
    NSNotificationCenter.defaultCenter().addObserver(self, selector: #selector(LoginViewController.keyboardNotification(_:)), name:UIKeyboardWillShowNotification, object: nil);
    NSNotificationCenter.defaultCenter().addObserver(self, selector: #selector(LoginViewController.keyboardNotification(_:)), name:UIKeyboardWillHideNotification, object: nil);

    // Save origin constant from constraint (for keyboardNotification)
    originConstraint = bottomConstraint.constant
    
    print("load first view")
    APIManager.sharedInstance.getInfo()
  }
  
  deinit {
    NSNotificationCenter.defaultCenter().removeObserver(self)
  }
  
  override func viewDidAppear(animated: Bool) {
    // Additional setup after view appears
    navigationController?.navigationBarHidden = true
  }
  
  override func viewDidDisappear(animated: Bool) {
    // Additional setup after view disappears
  }

  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
    // Dispose of any resources that can be recreated.
  }
  
  override func prefersStatusBarHidden() -> Bool {
    // StatusBar not hidden
    return false
  }
  
  override func preferredStatusBarStyle() -> UIStatusBarStyle {
    // StatusBar preferably light, is only called when navigationBarHidden = true
    return UIStatusBarStyle.LightContent
  }
  
  func keyboardNotification(notification: NSNotification) {
    // Change Bottom Constraint if Keyboard Notification happens
    if let userInfo = notification.userInfo {
      let endFrame = (userInfo[UIKeyboardFrameEndUserInfoKey] as? NSValue)?.CGRectValue()
      let duration:NSTimeInterval = (userInfo[UIKeyboardAnimationDurationUserInfoKey] as? NSNumber)?.doubleValue ?? 0
      let animationCurveRawNSN = userInfo[UIKeyboardAnimationCurveUserInfoKey] as? NSNumber
      let animationCurveRaw = animationCurveRawNSN?.unsignedLongValue ?? UIViewAnimationOptions.CurveEaseInOut.rawValue
      let animationCurve:UIViewAnimationOptions = UIViewAnimationOptions(rawValue: animationCurveRaw)
      
      if endFrame?.origin.y >= UIScreen.mainScreen().bounds.size.height {
        bottomConstraint?.constant = originConstraint
        fbLoginButton.hidden = false
        or.hidden = false
        signUp.hidden = false
      }
      else {
        bottomConstraint?.constant = (endFrame?.size.height)! + 20 ?? originConstraint
        fbLoginButton.hidden = true
        or.hidden = true
        signUp.hidden = true
      }
      
      UIView.animateWithDuration(duration,
        delay: NSTimeInterval(0),
        options: animationCurve,
        animations: { self.view.layoutIfNeeded() },
        completion: nil)
    }
  }
  
  func loginButton(loginButton: FBSDKLoginButton!, didCompleteWithResult result: FBSDKLoginManagerLoginResult!, error: NSError!) {
    // log in
    if error == nil {
      if result.isCancelled == false {
        let accessToken = FBSDKAccessToken.currentAccessToken()
        print("logged in with facebook")
        print("user with uid: \(accessToken.userID)")
        print("token string: \(accessToken.tokenString)")
        
        APIManager.sharedInstance.login(accessToken)
      }
      else {
        print("login was cancelled")
      }
    }
    else {
      print(error.localizedDescription)
    }
  }
  
  func loginButtonDidLogOut(loginButton: FBSDKLoginButton!) {
    // log out
    print("logged out")
  }
  
  func informOnLoginType(isFirstLogin loginType: Bool) {
    switch(loginType)
    {
    case true:
      let alert = UIAlertController(title: "Successfully Registered!", message: "Welcome to Buddify.", preferredStyle: UIAlertControllerStyle.Alert)
      alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.Default, handler: { (action) -> Void in self.performSegueWithIdentifier("toInterests", sender: self) }))
      
      presentViewController(alert, animated: true, completion: nil)
      
    case false:
      performSegueWithIdentifier("toHome", sender: self)
    }
  }
  
  // Dismiss keyboard when touching outside
  override func touchesBegan(touches: Set<UITouch>, withEvent event: UIEvent?) {
    view.endEditing(true)
  }
  
  // Actions when tapping return in textfield
  func textFieldShouldReturn(textField: UITextField) -> Bool {
    
    if textField == name {
      password.becomeFirstResponder()
    }
    else if textField == password {
      APIManager.sharedInstance.login(name.description, password: password.description)
    }
    else {
      assert(false)
    }

    return true
  }

  @IBAction func loginTouched(sender: UIButton) {
    print("login touched")
    
    APIManager.sharedInstance.login(name.description, password: password.description)
  }

  @IBAction func signUpTouched(sender: UIButton) {
    performSegueWithIdentifier("toSignUp", sender: sender)
  }
  
  @IBAction func tapTest(sender: AnyObject) {
    print("Tapped Logo ;-)")
  }
  
}
