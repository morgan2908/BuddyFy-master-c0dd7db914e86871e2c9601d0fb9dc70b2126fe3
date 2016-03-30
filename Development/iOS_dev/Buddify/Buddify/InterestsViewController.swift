//
//  InterestsViewController.swift
//  Buddify
//
//  Created by Christoph Rehbichler on 01/03/16.
//  Copyright © 2016 Christoph Rehbichler. All rights reserved.
//


import UIKit

class InterestsViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
  
  var items = ["Nightlife", "Dating", "Food", "Drinks", "Coffee", "Sports"]
  
  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
    
    // View controller-based NavBar configuration
    navigationController?.navigationBarHidden = false
    navigationController?.navigationBar.setBackgroundImage(nil, forBarMetrics: UIBarMetrics.Default)
    navigationController?.navigationBar.shadowImage = nil
    
    navigationItem.hidesBackButton = true
    navigationItem.title = "Interests"
  }
  
  override func viewDidAppear(animated: Bool) {
    // Additional setup after view appears
  }
  
  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
    // Dispose of any resources that can be recreated.
  }
  
  func tableView(tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
    return "Select your interests"
  }
  
  func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    return items.count
  }
  
  func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCellWithIdentifier("basicCell", forIndexPath: indexPath)
    cell.textLabel?.text = items[indexPath.row]
    
    return cell
  }
  
  func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
    print("selected item \(indexPath.row)")
    tableView.cellForRowAtIndexPath(indexPath)?.accessoryType = UITableViewCellAccessoryType.Checkmark
  }
  
  func tableView(tableView: UITableView, didDeselectRowAtIndexPath indexPath: NSIndexPath) {
    print("deselected item \(indexPath.row)")
    tableView.cellForRowAtIndexPath(indexPath)?.accessoryType = UITableViewCellAccessoryType.None
  }

  @IBAction func startTouched(sender: UIButton) {
    performSegueWithIdentifier("toHome", sender: sender)
  }
}
