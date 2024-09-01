# Bypass Method 1  <Badge type="tip" text="Easy" />

::: warning
Doesn't work with firmware versions ``020809`` ``020409``   
:::

## Things you will need
* An USB Mouse
* NETTV Box

## Procedure
Just do as shown in the video to access the system settings using your usb mouse.

<video controls src="/assets/method2.mp4" title="procedure"></video>

After enabling USB Debugging mode, you can use network adb to connect to the box and install your needed apps.

Make sure your device and NETTV is on the same network. Find your NETTV's IP Addresss ( you can look it up on NETTV's Settings app on Ethernet option ).

## Using ADB via Network

Once you you get the IP address, get your ADB installed PC ready and open cmd or Terminal, and enter ``adb connect [NETTV's IP Address]:[5555]``
For example : **adb connect 192.168.134:5555**

![ADB1](/assets/adbcmd.jpg)

After you hit Enter, you should see a prompt on your NETTV's TV Screen. Tick on Always Allow and and click on Ok.
![ADBPrompt](/assets/adbpromt.jpg)

Now you have connected to the adb of the NETTV. You can simply download apk on your PC and do ``adb install example.apk``. That will install the apk on your STB. I recommend installing ATV Launcher app via adb and then press Home button on the NETTV Remote, that will give you an prompt to choose which Launcher you want to use, simply choose ATV Launcher.Thus, ATV Launcher will let you access the installed apps. 
