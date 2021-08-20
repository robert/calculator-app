const themeSelector = document.getElementById("theme-selector")

themeSelector.addEventListener("input", changeTheme)

function changeTheme() {
    const theme = themeSelector.value

    
    switch (theme) {
        case "1":
            getTheme1()
            break                                                      
        case "2":
            getTheme2()
            break
        case "3":
            getTheme3()
            break
    }
}

function getTheme1() {
    // Change backgrounds
    document.documentElement.style.setProperty("--main-background", "hsl(222, 26%, 31%)")
    document.documentElement.style.setProperty("--screen-background", "hsl(224, 36%, 15%)")
    document.documentElement.style.setProperty("--keypad-background", "hsl(223, 31%, 20%)")
    //Change key colors
    document.documentElement.style.setProperty("--delete-key-background", "hsl(225, 21%, 49%)")
    document.documentElement.style.setProperty("--delete-key-shadow", "hsl(224, 28%, 35%)")
    document.documentElement.style.setProperty("--equals-key-background", " hsl(6, 63%, 50%)")
    document.documentElement.style.setProperty("--equals-key-shadow", "hsl(6, 70%, 34%)")
    document.documentElement.style.setProperty("--sml-key-background", "hsl(30, 25%, 89%)")
    document.documentElement.style.setProperty("--sml-key-shadow", "hsl(28, 16%, 65%)")
    // Change text colors
    document.documentElement.style.setProperty("--key-text", "hsl(221, 14%, 31%)")
    document.documentElement.style.setProperty("--theme-sel-text", "#fff")
    document.documentElement.style.setProperty("--output-text", "#fff")


}

function getTheme2() {
    // Change backgrounds
    document.documentElement.style.setProperty("--main-background", "hsl(0, 0%, 90%)")
    document.documentElement.style.setProperty("--screen-background", "hsl(0, 0%, 93%)")
    document.documentElement.style.setProperty("--keypad-background", "hsl(0, 5%, 81%)")
    //Change key colors
    document.documentElement.style.setProperty("--delete-key-background", "hsl(185, 42%, 37%)")
    document.documentElement.style.setProperty("--delete-key-shadow", "hsl(185, 58%, 25%)")
    document.documentElement.style.setProperty("--equals-key-background", "hsl(25, 98%, 40%)")
    document.documentElement.style.setProperty("--equals-key-shadow", "hsl(25, 99%, 27%)")
    document.documentElement.style.setProperty("--sml-key-background", "hsl(45, 7%, 89%)")
    document.documentElement.style.setProperty("--sml-key-shadow", "hsl(35, 11%, 61%)")

    // Change text colors
    document.documentElement.style.setProperty("--key-text", "hsl(60, 10%, 19%)")
    document.documentElement.style.setProperty("--theme-sel-text", "hsl(60, 10%, 19%)")
    document.documentElement.style.setProperty("--output-text", "hsl(60, 10%, 19%)")

}

function getTheme3() {
    // Change backgrounds
    document.documentElement.style.setProperty("--main-background", "hsl(268, 75%, 9%)")
    document.documentElement.style.setProperty("--screen-background", "hsl(268, 71%, 12%)")
    document.documentElement.style.setProperty("--keypad-background", "hsl(268, 71%, 12%)")
    //Change key colors
    document.documentElement.style.setProperty("--delete-key-background", "hsl(281, 89%, 26%)")
    document.documentElement.style.setProperty("--delete-key-shadow", "hsl(285, 91%, 52%)")
    document.documentElement.style.setProperty("--equals-key-background", "hsl(176, 100%, 44%)")
    document.documentElement.style.setProperty("--equals-key-shadow", "hsl(177, 92%, 70%)")
    document.documentElement.style.setProperty("--sml-key-background", "hsl(268, 47%, 21%)")
    document.documentElement.style.setProperty("--sml-key-shadow", "hsl(290, 70%, 36%)")
    // Change text colors
    document.documentElement.style.setProperty("--key-text", "hsl(52, 100%, 62%)")
    document.documentElement.style.setProperty("--theme-sel-text", "hsl(52, 100%, 62%)")
    document.documentElement.style.setProperty("--output-text", "hsl(52, 100%, 62%)")
    document.getElementById("equals-btn").style.color = "hsl(198, 20%, 13%)"

}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    getTheme3()
    
}











// const body = document.querySelector("body")
// const screen = document.getElementById("number-display")
// const keyPad = document.getElementById("container-btns")
// const smlBtns = document.querySelectorAll(".sml-btn")
// // const deleteBtn = document.getElementById("delete-btn")
// // const equalsBtn = document.getElementById("equals-btn")
// // const resetBtn = document.getElementById("reset-btn")
