Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Codes\CitadelGlamour\public\new_logo.jpeg")
$width = $img.Width
$height = $img.Height
$minSize = [Math]::Min($width, $height)
$x = [Math]::Floor(($width - $minSize) / 2)
$y = [Math]::Floor(($height - $minSize) / 2)

$bmp = New-Object System.Drawing.Bitmap $minSize, $minSize
$g = [System.Drawing.Graphics]::FromImage($bmp)
$rect = New-Object System.Drawing.Rectangle 0, 0, $minSize, $minSize
$srcRect = New-Object System.Drawing.Rectangle $x, $y, $minSize, $minSize
$g.DrawImage($img, $rect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$img.Dispose()
$bmp.Save("C:\Codes\CitadelGlamour\public\new_logo_cropped.jpeg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmp.Dispose()
$g.Dispose()
