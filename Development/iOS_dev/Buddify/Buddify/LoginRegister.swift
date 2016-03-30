//
//  LoginRegister.swift
//  Buddify
//
//  Created by Christoph Rehbichler on 01/03/16.
//  Copyright © 2016 Christoph Rehbichler. All rights reserved.
//

import UIKit

protocol LoginRegisterDelegate {
  func informOnLoginType(isFirstLogin loginType: Bool)
}

var loginRegisterDelegate: LoginRegisterDelegate? = nil