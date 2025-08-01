<script>
    function generateSVG() {
    const text = document.getElementById("quoteInput").value;
    const font = document.getElementById("fontSelect").value;
    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="150">
        <text x="50%" y="50%" font-family="${font}" font-size="32" fill="black" text-anchor="middle" alignment-baseline="middle">
            ${text}
        </text>
    </svg>
    `;
    document.getElementById("preview").innerHTML = svgContent;
}

    function downloadSVG() {
    const svg = document.getElementById("preview").innerHTML;
    const blob = new Blob([svg], {type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "custom-quote.svg";
    link.click();
    URL.revokeObjectURL(url);
}
</script>