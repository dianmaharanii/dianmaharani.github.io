/* Reset sederhana */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    line-height: 1.6;
    background-color: #f9f9f9;
    color: #333;
}

header.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background-color: #4caf50;
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .logo {
    font-size: 24px;
    font-weight: bold;
}

header .menu {
    list-style: none;
    display: flex;
}

header .menu li {
    margin-left: 20px;
}

header .menu li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.3s;
}

header .menu li a:hover {
    color: #ffeb3b;
}

.hero {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #4caf50, #81c784);
    color: white;
    text-align: center;
}

.hero h1 span {
    color: #ffeb3b;
}

.hero button {
    padding: 10px 25px;
    margin-top: 20px;
    border: none;
    background-color: #ffeb3b;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
}

.hero button:hover {
    background-color: #fdd835;
}

.section {
    padding: 60px 50px;
    max-width: 1000px;
    margin: auto;
}

.cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.card {
    background-color: white;
    padding: 20px;
    flex: 1 1 300px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    border-radius: 8px;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

footer {
    background-color: #4caf50;
    color: white;
    text-align: center;
    padding: 20px;
}

/* Fade-in efek sederhana */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}
