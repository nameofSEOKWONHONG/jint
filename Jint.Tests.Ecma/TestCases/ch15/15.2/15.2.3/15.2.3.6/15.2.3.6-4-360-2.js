/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-360-2.js
 * @description ES5 Attributes - Updating data property 'P' whose attributes are [[Writable]]: false, [[Enumerable]]: true, [[Configurable]]: true to an accessor property, 'O' is an Arguments object (8.12.9 - step 9.b.i)
 */


function testcase() {
        var obj = (function () {
            return arguments;
        }());

        Object.defineProperty(obj, "prop", {
            value: 2010,
            writable: false,
            enumerable: true,
            configurable: true
        });
        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        function getFunc() {
            return 20;
        }
        Object.defineProperty(obj, "prop", {
            get: getFunc
        });
        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");

        return desc1.hasOwnProperty("value") && desc2.hasOwnProperty("get") &&
            desc2.enumerable === true && desc2.configurable === true &&
            obj.prop === 20 && typeof desc2.set === "undefined" && desc2.get === getFunc;
    }
runTestCase(testcase);
