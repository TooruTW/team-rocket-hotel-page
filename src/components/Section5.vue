<script setup>
</script>
<template>
    <div class="h-screen w-full bg-theme-primary-10 relative">
        <!-- decoration -->
        <img class="w-50 absolute -top-10 right-20" src="/public/dots.png" alt="decroation-dot">
        <div class="w-full h-full flex items-center ml-10 gap-20">
            <img class="h-screen mt-13.5" src="/public/wave-line-vertical.png" alt="decroation-wave-vertical">
            <div class="flex flex-col justify-between h-full py-30">
                <!-- title -->
                <div class="w-fit h-fit flex items-center gap-10 leading-[1.2] tracking-wider">
                    <h1 class="h-full text-theme-primary-100 text-48 font-bold leading-[1.2] tracking-wider max-md:text-32">
                        佳餚<br/>美饌
                    </h1>
                    <div class=" w-35 h-0.5 bg-linear-to-r from-theme-primary-100 to-theme-neutral-0"></div>
                </div>
                <!-- cardcontainer -->
                    <div class="h-150">
                        <!-- card -->
                        <div class="h-full w-104 border-1 rounded-md flex flex-col justify-end 
                                  text-theme-neutral-0 bg-center bg-cover"
                                  style="background-image: url(https://s3-alpha-sig.figma.com/img/dcc0/f09d/56d8f662f30832b150a03c1174f39e2a?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oPEY0qO8QktYlf~0FlYQiTqjxHWAV9qd2ys9Gv~LNk2NjQ2PsBlUTZzCExrd7eBCAqrOeCGPVOkshOx2YCFJwmGwGQFz0bzM~jVpz7m83WVLB5ooRDKeCdXQX0eW~H36TJaU1CBAkPDKKFPdbvs7fvxqtD-JhYvfQyGtvkXOcbMcC~lpk-EEDsOVrrzIHDekS~xpGDj8STX2xh9z4DhNFBaHToeKLF77eH7jPip5-38ajHFPP3xXvaHojs5sxuCzvvC7BNwdQvWccIGEan1q7qcZljbHw44Q6uB5F5x-PXKGWEDcRZnk8lDkY59r47-d~GQEuRif3g-ZlAoychPFyQ__)">
                            <!-- textcontent --> 
                            <div class=" rounded-b-md p-6 flex flex-col gap-6
                                        backdrop-blur-xl bg-linear-to-b from-[#000000 0%] to-theme-neutral-bg">
                                <div class="flex justify-between">
                                    <h3 class="leading-[1.2] tracking-wider text-24 font-bold">海霸</h3>
                                    <h4 class="leading-[1.5] tracking-tight text-base font-bold">SUN-MON 11:00 - 20:30</h4>
                                </div>
                                <p class="leading-[1.5] tracking-tight text-base font-medium">
                                    以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。</p>
                            </div>
                        </div>
                    </div>

            </div>

        </div>

    </div>
</template>