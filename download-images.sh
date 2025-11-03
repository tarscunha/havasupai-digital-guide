#!/bin/bash

# Script to download external images to local folders
# Run this script to download all external images currently used in the site

echo "📥 Downloading external images to local folders..."

# Create function to download and rename images
download_image() {
    local url="$1"
    local output_path="$2"
    local filename="$3"
    
    echo "Downloading: $filename"
    curl -L -o "$output_path/$filename" "$url"
    
    if [ $? -eq 0 ]; then
        echo "✅ Downloaded: $filename"
    else
        echo "❌ Failed to download: $filename"
    fi
}

# Download hero image
download_image "https://www.visitarizona.com/imager/s3_us-west-1_amazonaws_com/aot-2020/images/landmarks/ro08swaqbatoyltgkgfz_50f989c3c31d5b1d8623b67a92726880.jpg" "public/images/hero" "main-canyon-view.jpg"

# Download mules image
download_image "https://theofficialhavasupaitribe.com/Havasupai-Mules/Havasupai-Mule-Train-3.jpg" "public/images/mules" "mule-train.jpg"

# Download store/cafe image
download_image "https://www.theofficialhavasupaitribe.com/Supai--640x480-.jpg" "public/images/supai-village" "supai-store.jpg"

# Download advocacy image
download_image "https://www.theofficialhavasupaitribe.com/Protect-Havasupai-From-Uranium-Mining-Evangeline-Kissoon.png" "public/images/advocacy" "uranium-mining-protection.png"

# Download hardcoded component images
download_image "https://www.theofficialhavasupaitribe.com/Mooney-Falls-Ladders--640x506-.jpg" "public/images/maps" "mooney-falls-ladders.jpg"

download_image "https://www.theofficialhavasupaitribe.com/About-Supai/DSC04705--480x640-.jpg" "public/images/supai-village" "about-supai.jpg"

download_image "https://www.theofficialhavasupaitribe.com/Little-Navajo-Falls--640x360-.jpg" "public/images/falls" "little-navajo-falls.jpg"

download_image "https://www.theofficialhavasupaitribe.com/The-Lodge--640x427-.jpg" "public/images/lodge" "havasupai-lodge.jpg"

download_image "https://www.theofficialhavasupaitribe.com/The-New-Falls--640x427-.jpg" "public/images/falls" "new-falls.jpg"

download_image "https://indigenouspeoplesresources.com/cdn/shop/products/s366865341169104376_p680_i2_w4167_cd7d3fd8-7421-4fbe-9d00-f58b24f37288_2048x2048.jpg?v=1674503940" "public/images/government" "tribal-seal.jpg"

echo ""
echo "🎉 Download complete! Images are now in your local folders."
echo "📝 Next step: Update the code to use local images instead of external URLs."