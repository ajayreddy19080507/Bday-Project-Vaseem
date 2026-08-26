function celebrate() {

    const emojis = [
        "❤️",
        "💕",
        "💖",
        "✨",
        "🌸",
        "🎉",
        "🥰"
    ];

    for (let i = 0; i < 50; i++) {

        const item =
            document.createElement("span");

        item.innerHTML =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];

        item.style.position = "fixed";

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.top = "-30px";

        item.style.fontSize =
            15 + Math.random() * 20 + "px";

        item.style.zIndex = "9999";

        item.style.pointerEvents = "none";

        item.style.transition =
            "transform 3s linear, opacity 3s";

        document.body.appendChild(item);


        setTimeout(() => {

            item.style.transform =
                `translateY(110vh)
                 rotate(${Math.random() * 720}deg)`;

            item.style.opacity = "0";

        }, 100);


        setTimeout(() => {

            item.remove();

        }, 3500);
    }
}