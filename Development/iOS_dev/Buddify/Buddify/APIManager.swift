//
//  APIManager.swift
//  Buddify
//
//  Created by Christoph Rehbichler on 27/03/16.
//  Copyright © 2016 Christoph Rehbichler. All rights reserved.
//

import Foundation

import FBSDKLoginKit

class APIManager {
  static let sharedInstance = APIManager()
  
  private init() {} //This prevents others from using the default '()' initializer for this class.
  
  // a basic GET request without a fancy http framework, just to test ;-)
  // 200 - OK
  // 400 - Bad Request 
  // 403 - Forbidden
  // 500 - Internal Server Error
  // see: https://de.wikipedia.org/wiki/HTTP-Statuscode
  func getInfo()
  {
    let myURL = apiURL + "buddify/info"
    let myNSURL = NSURL(string: myURL);
    
    let request = NSMutableURLRequest(URL:myNSURL!);
    request.HTTPMethod = "GET"
    
    //request.addValue("884288bae150b9f2f68d8dc3a932071d", forHTTPHeaderField: "Authorization")
    //request.HTTPBody = try? NSJSONSerialization.dataWithJSONObject(data, options: []);
    
    print("request: \(request.HTTPMethod) \(request.URL) \(request.allHTTPHeaderFields) \(request.HTTPBody)")
    
    let task = NSURLSession.sharedSession().dataTaskWithRequest(request) {
      (data, response, error) in
      
      if error != nil
      {
        print("errorCode: \(error?.code)")
        print("errorDescription: \(error?.localizedDescription)")
        return
      }
      
      if let responseAsString = NSString(data: data!, encoding: NSUTF8StringEncoding)
      {
        print("responseAsString: \(responseAsString)")
      }
      
      if let httpResponse = response as? NSHTTPURLResponse
      {
        print("statusCode: \(httpResponse.statusCode)")
        //print("description: \(httpResponse.description)")
      }
      
      do
      {
        if let convertedJsonIntoDict = try NSJSONSerialization.JSONObjectWithData(data!, options: []) as? NSDictionary {
          
          print("ConvertedJSONDictionary")
          print(convertedJsonIntoDict)
          
        }
      } catch let error as NSError
        {
          print(String(error.code) + error.localizedDescription)
        }
      
    }
    
    task.resume()
  }
  
  func login(email: String, password: String)
  {
    // API Call
    user = User(uid: "123", email: "test@buddify.com", firstName: "Bob", lastName: "Finder", apiAccessToken: "AG7DJP48S")
    
    print(user!)
    
    loginRegisterDelegate?.informOnLoginType(isFirstLogin: false)
  }
  
  func login(accessToken: FBSDKAccessToken)
  {
    // API Call
    let registration: Bool = true
    user = User(uid: "123", email: "test@buddify.com", firstName: "Bob", lastName: "Finder", apiAccessToken: "AG7DJP48S")
    
    if registration
    {
      loginRegisterDelegate?.informOnLoginType(isFirstLogin: true)
    }
    else
    {
      loginRegisterDelegate?.informOnLoginType(isFirstLogin: false)
    }
  }
  
  func register(email: String, password: String)
  {
    // API Call
    user = User(uid: "123", email: "test@buddify.com", firstName: "Bob", lastName: "Finder", apiAccessToken: "AG7DJP48S")
    
    loginRegisterDelegate?.informOnLoginType(isFirstLogin: true)
  }
  
}