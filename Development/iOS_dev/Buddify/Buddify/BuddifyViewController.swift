//
//  BuddifyViewController.swift
//  Buddify
//
//  Created by Christoph Rehbichler on 27/02/16.
//  Copyright © 2016 Christoph Rehbichler. All rights reserved.
//

import UIKit

class BuddifyViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource  {
  
  @IBOutlet weak var what: UIPickerView!
  
  var items = ["Parties", "Events", "Activities"]
  
  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
  }

  override func viewDidAppear(animated: Bool) {
    // Additional setup after view appears
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
  
  func numberOfComponentsInPickerView(pickerView: UIPickerView) -> Int {
    return 1
  }

  func pickerView(pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
    return items.count
  }
  
  func pickerView(pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
    return items[row]
  }
  
  func pickerView(pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
    // optional
  }
  
  @IBAction func findBuddyTouched(sender: UIButton) {
    performSegueWithIdentifier("showRecommendation", sender: sender)
  }
}

