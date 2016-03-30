//
//  User.swift
//  Buddify
//
//  Created by Christoph Rehbichler on 27/03/16.
//  Copyright © 2016 Christoph Rehbichler. All rights reserved.
//

import Foundation

class User : CustomStringConvertible {
  var uid: String!
  var email: String!
  var firstName: String!
  var lastName: String!
  
  var password: String?
  var userName: String?
  var dateOfBirth: String?
  var sex: String?
  var image: String?
  
  var apiAcessToken: String!
  
  init(uid: String, email: String, firstName: String, lastName: String, apiAccessToken: String)
  {
    self.uid = uid
    self.email = email
    self.firstName = firstName
    self.lastName = lastName
    self.apiAcessToken = apiAccessToken
  }
  
  var description: String {
    return "User " + uid + ": " + email + ", " + firstName + " " + lastName + ", " + apiAcessToken
  }
  
}