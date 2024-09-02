# Linux Installation
::: warning
This is for White Setup Box only. This might brick your device if you are not careful enough. Author of this documentation will take no responsibility. You are doing it on your own risk.  
:::
Linux instllation or running linux on Amlogic devices have been possible since many years. These setup boxes have similiar board design to the popular odroid and banana pis. Meaning , these devices have mainline linux kernel support. There have been many works in the past years to make it perfect. Currently, it works perfectly if you want to use it as a home server. You can self host email server , torrent server, file server, so on. These TV boxes are perfect for this kind of job.

![linux](/assets/linux.jpg)

## Introduction
There are two ways to use linux on this box. First one is to completely wipe the android OS off the device and install Linux. This method will make sure that Linux will boot when device reboots and you will be able to use the eMMC storage.

Second one is to boot Linux off a flash drive. This will make sure that you will not remove the existing android system. With this you will be able to use both. This method is highly recommended if you want use linux while still keep android OS.

## Things you will need

- Screw Driver
- Laptop / PC
- Flash Drive / Pendrive

## Procedure

Head over to this github repo https://github.com/devmfc/debian-on-amlogic and grab the latest Linux image. Choose any distro. I recommend Ubuntu. 

After downloading it, use BalenaEtcher tool to flash the image on the pendrive. 

Disconnect the USB and again connect it, you should see a boot drive on the File Explorer. Open it, inside there should be boot.config file. Open it with any text editor tool and uncomment the s905x_generic. Save the changes and disconnect the USB.

Now get your NETTV Setup Box. Open it using screw driver. In the front part of the board, there should be a button. See the image below to locate it.

![LOGO](/assets/nettvboard.jpg)

Connect the USB drive / pen drive into your box. Press and hold that button while you turn on your power for the box. Make sure you have a TV or a monitor connected. And you should see Linux boot screen. If it's not showing then try another USB port.

If you want to wipe the eMMC and install Linux on it then you could do it, by follow commands on that github repo. There are shell scripts there that will help you do it. But if you don't want to remove anything , then you should be fine. Use it as it is. The Linux should boot off the USB.

::: tip
This Linux image doesn't interfere with the Box's original recovery and bootloader. So you should be able to restore the wiped Android OS, using the box's firmware that can be found here [NETTV Firmwares](./firmware). Just put the firmware on your USB , bring the stock recovery menu and select the firmware zip file.  
:::

![Firmware](/assets/firmware.jpg)