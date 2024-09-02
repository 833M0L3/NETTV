# Linux Installation <Badge type="warning" text="Medium" />
::: warning
This is for White Setup Box only. This might brick your device if you are not careful enough. Author of this documentation will take no responsibility. You are doing it on your own risk.  
:::
Linux installation or running linux on Amlogic devices have been possible since many years. These setup boxes have similiar board design to the popular odroid and banana pis. Meaning , these devices have mainline linux kernel support. There have been many works in the past years to make it perfect. Currently, it works perfectly if you want to use it as a home server. You can self host email server , torrent server, file server, so on. These TV boxes are perfect for this kind of job.

![linux](/assets/linux.jpg)

## Introduction
There are two ways to use linux on this box. First one is to completely wipe the android OS off the device and install Linux. This method will make sure that Linux will boot when device reboots and you will be able to use the eMMC storage.

Second one is to boot Linux off a flash drive. This will make sure that you will not remove the existing android system. With this you will be able to use both. This method is highly recommended if you want use linux while still keeping android OS.

## Things you will need

- Screw Driver
- Laptop / PC
- Flash Drive / Pendrive

## Procedure
::: tip
If you are planning to install Linux on the box by wiping the Android OS, make sure you have the firmware. Having a firmware with you assures that you can again get back to the android OS later. Currently available firmware for the white boxes is ``021007``. This is the latest one if you have firmware version ``020F07`` ``020A07``, this should work. Remember, you can not use stock recovery to install old firmwares. Either the firmware should be the same one that is on your box or should be latest.
:::

Head over to this github repo https://github.com/devmfc/debian-on-amlogic and grab the latest Linux image. Choose any distro. I recommend Ubuntu. 

After downloading it, use BalenaEtcher tool to flash the image on the pendrive. 

Disconnect the USB and again connect it, you should see a boot drive on the File Explorer. Open it, inside there should be boot.config file. Open it with any text editor tool and uncomment the s905x_generic. Save the changes and disconnect the USB.

Now get your NETTV Setup Box. Open it using screw driver. In the front part of the board, there should be a button. See the image below to locate it.

![LOGO](/assets/nettvboard.jpg)

Connect the USB drive / pen drive into your box. Press and hold that button while you turn on your power for the box. Make sure you have a TV or a monitor connected. And you should see Linux boot screen. If it's not showing then try another USB port.

If you want to wipe the eMMC and install Linux on it then you could do it, by follow commands on that github repo. There are shell scripts there that will help you do it. But if you don't want to remove anything , then you should be fine. Use it as it is. The Linux should boot off the USB.

::: tip
This Linux image doesn't interfere with the Box's original recovery and bootloader. So you should be able to restore the wiped Android OS, using the box's firmware that can be found here [NETTV Firmwares](./firmware). Just put the firmware on your USB , bring the stock recovery menu and select the firmware zip file. To boot to the stock recovery, press and hold that button of the front board during the start up. 
:::

![Recovery](/assets/recovery.jpg)

![Firmware](/assets/firmware.jpg)
