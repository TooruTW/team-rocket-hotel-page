<script setup>
    import Footer from './Footer.vue';
</script>
<template>
    <div class="min-h-screen flex flex-col justify-between items-center pt-30 bg-theme-neutral-bg text-theme-neutral-0 
                relative gap-10
                max-md:pt-20">
        <div class="flex flex-col justify-between gap-20 mx-3
                    max-md:gap-10" >
        <!-- title -->
            <div class="flex items-center gap-10 leading-[1.2] tracking-wider">
                <h1 class="h-full text-theme-primary-100 text-48 font-bold leading-[1.2] tracking-wider max-md:text-32">
                    交通<br/>方式
                </h1>
                <div class=" w-35 h-0.5 bg-linear-to-r from-theme-primary-100 to-theme-neutral-0"></div>
            </div>
        <!-- address info -->
        <div class="flex flex-col gap-10">
            <!-- map -->
            <div>
                <p class="text-base font-bold leading-[1.5] tracking-wider mb-4">
                    台灣高雄市新興區六角路123號
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6907689937652!2d120.30793527592263!3d22.628019879452232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0491b7febacd%3A0x24542bac2726199b!2z5a-25oiQ5LiW57SA5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1744269998897!5m2!1szh-TW!2stw" 
                        style="border:0;" allowfullscreen="" 
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        class="w-full aspect-ratio-ifamr-map max-md:aspect-ratio-ifamr-map-md rounded-md"
                        ></iframe>
            </div>
            <!-- info -->
            <div class="flex gap-6 max-w-324 max-md:flex-col">
                <div class="">
                    <svg class="max-md:w-12" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_31_1989)">
<path d="M63.0665 20.0327C62.3999 18.066 60.5332 16.666 58.3332 16.666H21.6665C19.4665 16.666 17.6332 18.066 16.9332 20.0327L9.99988 39.9993V66.666C9.99988 68.4993 11.4999 69.9993 13.3332 69.9993H16.6665C18.4999 69.9993 19.9999 68.4993 19.9999 66.666V63.3327H59.9999V66.666C59.9999 68.4993 61.4999 69.9993 63.3332 69.9993H66.6665C68.4999 69.9993 69.9999 68.4993 69.9999 66.666V39.9993L63.0665 20.0327ZM21.6665 53.3327C18.8999 53.3327 16.6665 51.0993 16.6665 48.3327C16.6665 45.566 18.8999 43.3327 21.6665 43.3327C24.4332 43.3327 26.6665 45.566 26.6665 48.3327C26.6665 51.0993 24.4332 53.3327 21.6665 53.3327ZM58.3332 53.3327C55.5665 53.3327 53.3332 51.0993 53.3332 48.3327C53.3332 45.566 55.5665 43.3327 58.3332 43.3327C61.0999 43.3327 63.3332 45.566 63.3332 48.3327C63.3332 51.0993 61.0999 53.3327 58.3332 53.3327ZM16.6665 36.666L21.6665 21.666H58.3332L63.3332 36.666H16.6665Z" fill="#BF9D7D"/>
</g>
<defs>
<clipPath id="clip0_31_1989">
<rect width="80" height="80" fill="white"/>
</clipPath>
</defs>
                    </svg>
                    <h5 class="text-24 max-md:text-base mb-2 font-bold leading-[1.2] tracking-wide">自行開車</h5>
                    <p class="text-base max-md:text-14 max-md:font-normal font-medium leading-[1.5] tracking-wider">
                        如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
                    </p>
                </div>
                <div class="">
                    <svg class="max-md:w-12" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_31_1994)">
<path d="M40 6.6665C26.6667 6.6665 13.3334 8.33317 13.3334 19.9998V51.6665C13.3334 58.0998 18.5667 63.3332 25 63.3332L20 68.3332V69.9998H27.4334L34.1 63.3332H46.6667L53.3334 69.9998H60V68.3332L55 63.3332C61.4334 63.3332 66.6667 58.0998 66.6667 51.6665V19.9998C66.6667 8.33317 54.7334 6.6665 40 6.6665ZM25 56.6665C22.2334 56.6665 20 54.4332 20 51.6665C20 48.8998 22.2334 46.6665 25 46.6665C27.7667 46.6665 30 48.8998 30 51.6665C30 54.4332 27.7667 56.6665 25 56.6665ZM36.6667 33.3332H20V19.9998H36.6667V33.3332ZM43.3334 33.3332V19.9998H60V33.3332H43.3334ZM55 56.6665C52.2334 56.6665 50 54.4332 50 51.6665C50 48.8998 52.2334 46.6665 55 46.6665C57.7667 46.6665 60 48.8998 60 51.6665C60 54.4332 57.7667 56.6665 55 56.6665Z" fill="#BF9D7D"/>
</g>
<defs>
<clipPath id="clip0_31_1994">
<rect width="80" height="80" fill="white"/>
</clipPath>
</defs>
                    </svg>
                    <h5 class="text-24 max-md:text-base mb-2 font-bold leading-[1.2] tracking-wide">高鐵/火車</h5>
                    <p class="text-base max-md:text-14 max-md:font-normal font-medium leading-[1.5] tracking-wider">
                        如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
                    </p>
                </div>
                <div class="">
                    <svg class="max-md:w-12" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M53.3332 20L63.3332 33.3333H69.9999C73.6999 33.3333 76.6666 36.3 76.6666 40V50H69.9999C69.9999 52.6522 68.9463 55.1957 67.071 57.0711C65.1956 58.9464 62.6521 60 59.9999 60C57.3477 60 54.8042 58.9464 52.9288 57.0711C51.0535 55.1957 49.9999 52.6522 49.9999 50H29.9999C29.9999 52.6522 28.9463 55.1957 27.071 57.0711C25.1956 58.9464 22.6521 60 19.9999 60C17.3478 60 14.8042 58.9464 12.9289 57.0711C11.0535 55.1957 9.99992 52.6522 9.99992 50H3.33325V40C3.33325 36.3 6.29992 33.3333 9.99992 33.3333L19.9999 20H53.3332ZM34.9999 25H22.4999L16.1999 33.3333H34.9999V25ZM39.9999 25V33.3333H57.1332L50.8332 25H39.9999ZM19.9999 45C18.6738 45 17.4021 45.5268 16.4644 46.4645C15.5267 47.4021 14.9999 48.6739 14.9999 50C14.9999 51.3261 15.5267 52.5978 16.4644 53.5355C17.4021 54.4732 18.6738 55 19.9999 55C21.326 55 22.5978 54.4732 23.5355 53.5355C24.4731 52.5978 24.9999 51.3261 24.9999 50C24.9999 48.6739 24.4731 47.4021 23.5355 46.4645C22.5978 45.5268 21.326 45 19.9999 45ZM59.9999 45C58.6738 45 57.4021 45.5268 56.4644 46.4645C55.5267 47.4021 54.9999 48.6739 54.9999 50C54.9999 51.3261 55.5267 52.5978 56.4644 53.5355C57.4021 54.4732 58.6738 55 59.9999 55C61.326 55 62.5978 54.4732 63.5354 53.5355C64.4731 52.5978 64.9999 51.3261 64.9999 50C64.9999 48.6739 64.4731 47.4021 63.5354 46.4645C62.5978 45.5268 61.326 45 59.9999 45Z" fill="#BF9D7D"/>
                    </svg>
                    <h5 class="text-24 max-md:text-base mb-2 font-bold leading-[1.2] tracking-wide">禮賓車服務</h5>
                    <p class="text-base max-md:text-14 max-md:font-normal font-medium leading-[1.5] tracking-wider">
                        承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
                    </p>
                </div>
            </div>
        </div>
    </div>
<img class="w-full max-md:hidden" src="/public/wave-line-horizone-full.png" alt="decoration-wave">
<img class="hidden max-md:block" src="/public/wave-line-horizone-full-md.png" alt="decoration-wave-md">
<Footer></Footer>
</div>

</template>