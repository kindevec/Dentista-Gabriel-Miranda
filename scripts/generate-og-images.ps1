Add-Type -AssemblyName System.Drawing

$rootDir = Get-Location
$logoPath = Join-Path $rootDir "public\logo-miranda.png"
$og169Path = Join-Path $rootDir "public\og-image.png"
$ogSquarePath = Join-Path $rootDir "public\og-image-square.png"

$bgColor = [System.Drawing.Color]::FromArgb(250, 249, 245) # #FAF9F5

# Load logo
$srcImg = [System.Drawing.Image]::FromFile($logoPath)

# -------------------------------------------------------------
# 1. Generate 1200x630 (16:9) OpenGraph Image
# -------------------------------------------------------------
$width169 = 1200
$height169 = 630
$bmp169 = New-Object System.Drawing.Bitmap($width169, $height169)
$g169 = [System.Drawing.Graphics]::FromImage($bmp169)

$g169.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g169.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g169.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g169.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$brush = New-Object System.Drawing.SolidBrush($bgColor)
$g169.FillRectangle($brush, 0, 0, $width169, $height169)

# Center 440x440 logo inside 1200x630 (yielding 95px padding within 630x630 crop)
$logoSize169 = 440
$logoX169 = [int](($width169 - $logoSize169) / 2)
$logoY169 = [int](($height169 - $logoSize169) / 2)

$g169.DrawImage($srcImg, $logoX169, $logoY169, $logoSize169, $logoSize169)
$g169.Dispose()

# Save 16:9
$bmp169.Save($og169Path, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp169.Dispose()
Write-Host "Generated og-image.png (1200x630) successfully."

# -------------------------------------------------------------
# 2. Generate 800x800 (1:1) OpenGraph Image
# -------------------------------------------------------------
$widthSq = 800
$heightSq = 800
$bmpSq = New-Object System.Drawing.Bitmap($widthSq, $heightSq)
$gSq = [System.Drawing.Graphics]::FromImage($bmpSq)

$gSq.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gSq.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gSq.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gSq.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$gSq.FillRectangle($brush, 0, 0, $widthSq, $heightSq)

# Center 580x580 logo with 110px padding on all sides
$logoSizeSq = 580
$logoXSq = [int](($widthSq - $logoSizeSq) / 2)
$logoYSq = [int](($heightSq - $logoSizeSq) / 2)

$gSq.DrawImage($srcImg, $logoXSq, $logoYSq, $logoSizeSq, $logoSizeSq)
$gSq.Dispose()
$brush.Dispose()

# Save 1:1
$bmpSq.Save($ogSquarePath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmpSq.Dispose()
Write-Host "Generated og-image-square.png (800x800) successfully."

$srcImg.Dispose()
