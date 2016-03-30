//
//  UICustomizer.swift
//  Buddify
//
//  Created by Christoph Rehbichler on 15/03/16.
//  Copyright © 2016 Christoph Rehbichler. All rights reserved.
//

import UIKit

func makeShadow(view: UIView)
{
  view.layer.masksToBounds = false
  view.layer.shadowColor = UIColor.blackColor().CGColor
  view.layer.shadowOffset = CGSize(width: 0, height: 0.5)
  view.layer.shadowOpacity = 0.2
  view.layer.shadowRadius = 1
}