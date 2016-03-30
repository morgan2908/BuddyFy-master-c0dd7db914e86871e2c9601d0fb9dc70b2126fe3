//
//  FirstViewController.swift
//  Buddify
//
//  Created by Christoph Rehbichler on 27/02/16.
//  Copyright © 2016 Christoph Rehbichler. All rights reserved.
//

import UIKit

class FirstViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
  
  var items = ["Rockhouse", "Republic", "Hangar-7"]
  var requests = ["Anant"]
  
  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
    
    // View controller-based NavBar configuration
    navigationController?.navigationBarHidden = false
    navigationController?.navigationBar.setBackgroundImage(nil, forBarMetrics: UIBarMetrics.Default)
    navigationController?.navigationBar.shadowImage = nil
    
    // NavItem in tabBarController configuration
    tabBarController?.navigationItem.hidesBackButton = true
    tabBarController?.navigationItem.title = "Feed"
  }
  
  override func viewDidAppear(animated: Bool) {
    // Additional setup after view appears
    tabBarController?.navigationItem.title = "Feed"
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
  
  func numberOfSectionsInTableView(tableView: UITableView) -> Int {
    return 2
  }
  
  func tableView(tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
    if section == 0 {
      return "Upcoming Meetings"
    }
    else if section == 1 {
      return "Buddy Requests"
    }
    
    return "Undefined Title/Section"
  }
  
  func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    if section == 0 {
      return items.count
    }
    else if section == 1 {
      return requests.count
    }
    
    return 0
  }
  
  func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
    if indexPath.section == 0 {
      let cell = tableView.dequeueReusableCellWithIdentifier("UpcomingMeetingsCell", forIndexPath: indexPath) as! UpcomingMeetingsCell
      
      cell.what.text = items[indexPath.row]
      
      return cell
    }
    else if indexPath.section == 1 {
      let cell = tableView.dequeueReusableCellWithIdentifier("BuddyRequestsCell", forIndexPath: indexPath) as! BuddyRequestsCell
      
      cell.who.text = requests[indexPath.row]
      
      return cell
    }
    
    return UITableViewCell()
  }

  @IBAction func buddifyTouched(sender: UIButton) {
    performSegueWithIdentifier("toBuddify", sender: sender)
  }
  
}

