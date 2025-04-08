<script setup>
    const bgImg = "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=3124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

</script>
<template>
    <div class="w-full min-h-screen bg-theme-neutral-bg relative -z-20 flex items-center justify-center">
        <img class="aspect-ration-about-bg object-cover absolute top-1/2 -translate-y-5/8 -z-10" :src="bgImg" alt="background-img">
        <div class="w-[54%] p-20 text-theme-neutral-0 z-10 flex flex-col gap-20 
                    translate-x-[13%] 
                    border-b-1 border-l-1 rounded-10xl rounded-br-none
                    backdrop-blur-[20px] bg-linear-to-b from-[#140F0ACC] to-[#BE9C7CCC]">
            <div class="flex items-center gap-10 ">
                <h1 class="text-48 leading-[1.2] tracking-wider font-bold">關於<br/>我們</h1>
                <div class="w-40 h-0.5 bg-theme-neutral-0"></div>
            </div>
            <div class=" leading-[1.5] tracking-wide flex flex-col gap-10 font-medium">
                <p>享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
                    我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。 </p>
                <p>我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
                    我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。 </p>
                <p>在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。 </p>
                <p>享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。</p>
            </div>
        </div>
    </div>
</template>