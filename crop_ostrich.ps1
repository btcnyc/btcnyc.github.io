Add-Type -AssemblyName System.Drawing
$src = 'static/img/nostr_ostrich.png'
$dest = 'static/img/nostr_ostrich_cropped.png'
$img = [System.Drawing.Bitmap]::FromFile($src)
$minX = $img.Width
$minY = $img.Height
$maxX = 0
$maxY = 0
for ($x = 0; $x -lt $img.Width; $x++) {
  for ($y = 0; $y -lt $img.Height; $y++) {
    $pixel = $img.GetPixel($x,$y)
    if ($pixel.A -gt 0) {
      if ($x -lt $minX) { $minX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}
if ($maxX -ge $minX -and $maxY -ge $minY) {
  $width = $maxX - $minX + 1
  $height = $maxY - $minY + 1
  $rect = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)
  $cropped = $img.Clone($rect, $img.PixelFormat)
  $cropped.Save($dest,[System.Drawing.Imaging.ImageFormat]::Png)
  $cropped.Dispose()
  Remove-Item $src
  Rename-Item $dest (Split-Path $src -Leaf)
}
$img.Dispose()
