/** @type {import('tailwindcss').Config} */
module.exports = {
          content: ["./*.{html,js}"],
          theme: {
            extend: {
                    colors: {
                              "color-primary": '#01051e',
                              "color-primary-light": "#020726",
                              "color-primary-dark" :  "#010417",
                              "color-secndary" : "#ff7d3b",
                              "color-gray" : "#333",
                              "color-white" : "#fff",
                              "color-blob" : "#A427DF"
                    }
            },
            container : {
                    "center" : "ture",
                    padding: {
                              default : "30px",
                              md: '50px'
                              
                    }
            }
          },
          plugins: [],
        }