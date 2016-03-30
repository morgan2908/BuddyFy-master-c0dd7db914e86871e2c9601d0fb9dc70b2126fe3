//
//  RecommendationViewController.swift
//  Buddify
//
//  Created by Christoph Rehbichler on 13/03/16.
//  Copyright © 2016 Christoph Rehbichler. All rights reserved.
//

import UIKit

class RecommendationViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
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

}
