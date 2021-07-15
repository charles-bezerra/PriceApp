const Page = ({children}) => `
    <html lang="pt-br">
        <head>
            <meta charset="utf-8"/>
        </head>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Verdana, Geneva, Tahoma, sans-serif
            }

            div {
                box-sizing: border-box;
            }

            .page {
                padding: 0%;
                width: 29.7cm;
                height: 21cm; 
            }

            .block-price {
                height: 3.4cm;
                width: 9.4cm;
                max-width: 9.8cm;
                padding: 0.3cm 0.15cm;
                display: flex;
                outline: 0.01cm;
                outline-color: black;
                margin: 0 !important;
                outline-style: dotted;
                flex-direction: row;
                background-color: yellow;
            }

            .row {
                display: flex;
                flex-direction: row;     
                justify-content: space-between;    
            }

            .icon-area {
                width: calc(25% - 0.3cm); 
                height: 100%;
                margin: 0cm 0.15cm;
                display: flex;
                overflow: hidden;
                justify-content: center;
                align-items: center;
                align-self: center;
            }

            .icon-area img {
                width: 100%;
                height: auto;
            }

            .price-area {
                height: 100%;
                width: calc(75% - 0.3cm);
                margin: 0cm 0.15cm;
                padding: 16px 12px;
                background-color: white;
            }

            .title {
                font-size: 15px;
                font-weight: 600;
                white-space: nowrap;
                text-transform: uppercase;
                overflow: hidden;
                margin-bottom: 12px;
            }

            .price {
                font-size: 22px;
                font-weight: 600;
            }
        </style>
        <body>
            <div class="page">${children}</div>
        </body>
    </html>
`;

export default Page;