# Bypass Method 2  <Badge type="warning" text="Medium" />

::: warning
Doesn't work with firmware versions ``020809`` ``020409``   
:::

## Things you will need
* A Redmi Phone with IR Blaster ( **This is very important and is one of the most crucial part of this method, without this I don't think it is possible**)
* PC with ADB setup ( Google to learn how to setup adb on Windows or any OS )
* NETTV Setup Box ( Ofcourse )

## Procedure
First let's explain what we are going to do. We are going to use the IR Blaster of the Redmi Phone to control the NETTV Setup Box. With the Mi Remote app that is built in on the phone we are going to use it to open system settings on NETTV. Once we open the system settings , we will enable the Developer Option and enable USB Debugging mode, then use it to install 3rd party apps on the Setup Box.

* In order for the Mi Remote to get the right keymap database, we need to set the phone's region to India. To do that, simply go to Settings of the phone and navigate to **Additional Settings** and there should be an option to let you change the region. Set it to India. 
* Once it's done, clear the app data of Mi Remote App if it's already installed, if it's not installed on your phone then download it from the play store.
* Now open the Mi Remote App and select Setup Box, inside there you should see tons of company names. 

![MiRemote1](/assets/miremote1.png)

* Look for **Home Digital** and select it
* A new menu will come up with virtual power button. Point your phone towards NETTV Setup Box and press the top right button as shown in the image below. That should open the system settings on your TV Box.

![MiRemote2](/assets/remote1.jpg)

## Using ADB via Network
Once system settings is opened , enable Developer Option and enable USB Debugging.

![SystemSettings](/assets/systemsettings.jpg)

Make sure your device and NETTV is on the same network. Find your NETTV's IP Addresss ( you can look it up on NETTV's Settings app on Ethernet option ).

Once you you get the IP address, get your ADB installed PC ready and open cmd or Terminal, and enter ``adb connect [NETTV's IP Address]:[5555]``
For example : **adb connect 192.168.134:5555**

![ADB1](/assets/adbcmd.jpg)

After you hit Enter, you should see a prompt on your NETTV's TV Screen. Tick on Always Allow and and click on Ok.
![ADBPrompt](/assets/adbpromt.jpg)

Now you have connected to the adb of the NETTV. You can simply download apk on your PC and do ``adb install example.apk``. That will install the apk on your STB. I recommend installing ATV Launcher app via adb and then press Home button on the NETTV Remote, that will give you an prompt to choose which Launcher you want to use, simply choose ATV Launcher.Thus, ATV Launcher will let you access the installed apps. 
