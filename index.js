

        let open = document.querySelector(".menuicon");
        let close = document.querySelector(".close");
        let resmenu = document.querySelector(".resmenu")
        let track = new Audio();
        let songblock = document.getElementsByClassName("songblock");
        let pouse = document.getElementById("pouse");
        let playbtn = document.getElementById("play");

        let maintitle = document.getElementById("maintitle");
        let subtitle = document.getElementById("subtitle");
        let audioimg = document.getElementById("audioimg");


        let crnindex = 0;




        let load=(index)=>{
            track.src=songblock[index].getAttribute("src");
        };

        const playtrack =() =>{
            load(crnindex)
            track.play();
            playbtn.style.display="none";
            pouse.style.display="flex";
        }

       let pousetrack = ()=>{
        track.pause();
            playbtn.style.display="flex";
            pouse.style.display="none";
       }

      
       
        
        
        Array.from(songblock).forEach((songblock , index)=>{
            songblock.addEventListener("click",()=>{
                crnindex = index;
                load(crnindex);
                playtrack();  

                if(index == 0)
            {
                maintitle.innerHTML="Ram Siya Ram";
                subtitle.innerHTML="Adipurush";
                audioimg.style.backgroundImage="url('https://tse1.mm.bing.net/th?id=OIP.kxecmxH4vDdL2AgFrqqmYwHaEK&pid=Api&P=0&h=220')";

                
            }
            else  if(index == 7)
            {
                maintitle.innerHTML="Theme Of Kalki";
                subtitle.innerHTML="Kalki 2898";
                audioimg.style.backgroundImage="url('https://c.saavncdn.com/623/Theme-Of-Kalki-From-Kalki-2898-AD-Hindi-Hindi-2024-20240625113654-500x500.jpg')";
            }
            else  if(index == 1)
            {
                maintitle.innerHTML="Channa Ve";
                subtitle.innerHTML="Bhoot Part One";
                audioimg.style.backgroundImage="url('https://c.saavncdn.com/006/Bhoot-Part-One-The-Haunted-Ship-Hindi-2020-20200212161346-500x500.jpg')";
            }
            else  if(index == 2)
            {
                maintitle.innerHTML="Dekhha Tenu";
                subtitle.innerHTML="Mr & Mrs Mahi";
                audioimg.style.backgroundImage="url('https://static.theprint.in/wp-content/uploads/2024/05/ANI-20240515101811.jpg')";
            }
            else  if(index == 3)
            {
                maintitle.innerHTML="Suniyan Suniyan";
                subtitle.innerHTML="Juss X MixSingh";
                audioimg.style.backgroundImage="url('https://a10.gaanacdn.com/gn_img/albums/MmqK5pEbwR/qK5ZdZQz3w/size_m_1712642328.jpg')";
            }
            else  if(index == 4)
            {
                maintitle.innerHTML="Tere Hawaale";
                subtitle.innerHTML="Laal Singh Chaddha";
                audioimg.style.backgroundImage="url('https://i.ytimg.com/vi/IazFQgYby3U/maxresdefault.jpg')";
            }

            else  if(index == 5)
            {
                maintitle.innerHTML="Tum Se";
                subtitle.innerHTML="Teri Batton mein Uljha Jiya";
                audioimg.style.backgroundImage="url('https://c.saavncdn.com/186/Tum-Se-From-Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240202001003-500x500.jpg')";
            }

            else  if(index == 6)
            {
                maintitle.innerHTML="Gulabi Sadi";
                subtitle.innerHTML="Sanju Rathod";
                audioimg.style.backgroundImage="url('https://c.saavncdn.com/593/Gulabi-Sadi-Marathi-2024-20240220043332-500x500.jpg')";
            }
            })
        })

        open.addEventListener("click", () => {
            open.style.display = "none";
            close.style.display = "flex";
            resmenu.style.display = "block";
        })

        close.addEventListener("click", () => {
            open.style.display = "block";
            close.style.display = "none";
            resmenu.style.display = "none";
        })


        function prev(){
            crnindex = (crnindex-1 + songblock.length)%songblock.length;
            load(crnindex);
            if(crnindex == 0)
                {
                    maintitle.innerHTML="Ram Siya Ram";
                    subtitle.innerHTML="Adipurush";
                    audioimg.style.backgroundImage="url('https://tse1.mm.bing.net/th?id=OIP.kxecmxH4vDdL2AgFrqqmYwHaEK&pid=Api&P=0&h=220')";
    
                    
                }
                else  if(crnindex == 7)
                {
                    maintitle.innerHTML="Theme Of Kalki";
                    subtitle.innerHTML="Kalki 2898";
                    audioimg.style.backgroundImage="url('https://c.saavncdn.com/623/Theme-Of-Kalki-From-Kalki-2898-AD-Hindi-Hindi-2024-20240625113654-500x500.jpg')";
                }
                else  if(crnindex == 1)
                {
                    maintitle.innerHTML="Channa Ve";
                    subtitle.innerHTML="Bhoot Part One";
                    audioimg.style.backgroundImage="url('https://c.saavncdn.com/006/Bhoot-Part-One-The-Haunted-Ship-Hindi-2020-20200212161346-500x500.jpg')";
                }
                else  if(crnindex == 2)
                {
                    maintitle.innerHTML="Dekhha Tenu";
                    subtitle.innerHTML="Mr & Mrs Mahi";
                    audioimg.style.backgroundImage="url('https://static.theprint.in/wp-content/uploads/2024/05/ANI-20240515101811.jpg')";
                }
                else  if(crnindex == 3)
                {
                    maintitle.innerHTML="Suniyan Suniyan";
                    subtitle.innerHTML="Juss X MixSingh";
                    audioimg.style.backgroundImage="url('https://a10.gaanacdn.com/gn_img/albums/MmqK5pEbwR/qK5ZdZQz3w/size_m_1712642328.jpg')";
                }
                else  if(crnindex == 4)
                {
                    maintitle.innerHTML="Tere Hawaale";
                    subtitle.innerHTML="Laal Singh Chaddha";
                    audioimg.style.backgroundImage="url('https://i.ytimg.com/vi/IazFQgYby3U/maxresdefault.jpg')";
                }
    
                else  if(crnindex == 5)
                {
                    maintitle.innerHTML="Tum Se";
                    subtitle.innerHTML="Teri Batton mein Uljha Jiya";
                    audioimg.style.backgroundImage="url('https://c.saavncdn.com/186/Tum-Se-From-Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240202001003-500x500.jpg')";
                }
    
                else  if(crnindex == 6)
                {
                    maintitle.innerHTML="Gulabi Sadi";
                    subtitle.innerHTML="Sanju Rathod";
                    audioimg.style.backgroundImage="url('https://c.saavncdn.com/593/Gulabi-Sadi-Marathi-2024-20240220043332-500x500.jpg')";
                }
            playtrack();
        }

        function next(){
            crnindex = (crnindex+1)% songblock.length;
            load(crnindex);
            if(crnindex == 0)
                {
                    maintitle.innerHTML="Ram Siya Ram";
                    subtitle.innerHTML="Adipurush";
                    audioimg.style.backgroundImage="url('https://tse1.mm.bing.net/th?id=OIP.kxecmxH4vDdL2AgFrqqmYwHaEK&pid=Api&P=0&h=220')";
    
                    
                }
                else  if(crnindex == 7)
                {
                    maintitle.innerHTML="Theme Of Kalki";
                    subtitle.innerHTML="Kalki 2898";
                    audioimg.style.backgroundImage="url('https://c.saavncdn.com/623/Theme-Of-Kalki-From-Kalki-2898-AD-Hindi-Hindi-2024-20240625113654-500x500.jpg')";
                }
                else  if(crnindex == 1)
                {
                    maintitle.innerHTML="Channa Ve";
                    subtitle.innerHTML="Bhoot Part One";
                    audioimg.style.backgroundImage="url('https://c.saavncdn.com/006/Bhoot-Part-One-The-Haunted-Ship-Hindi-2020-20200212161346-500x500.jpg')";
                }
                else  if(crnindex == 2)
                {
                    maintitle.innerHTML="Dekhha Tenu";
                    subtitle.innerHTML="Mr & Mrs Mahi";
                    audioimg.style.backgroundImage="url('https://static.theprint.in/wp-content/uploads/2024/05/ANI-20240515101811.jpg')";
                }
                else  if(crnindex == 3)
                {
                    maintitle.innerHTML="Suniyan Suniyan";
                    subtitle.innerHTML="Juss X MixSingh";
                    audioimg.style.backgroundImage="url('https://a10.gaanacdn.com/gn_img/albums/MmqK5pEbwR/qK5ZdZQz3w/size_m_1712642328.jpg')";
                }
                else  if(crnindex == 4)
                {
                    maintitle.innerHTML="Tere Hawaale";
                    subtitle.innerHTML="Laal Singh Chaddha";
                    audioimg.style.backgroundImage="url('https://i.ytimg.com/vi/IazFQgYby3U/maxresdefault.jpg')";
                }
    
                else  if(crnindex == 5)
                {
                    maintitle.innerHTML="Tum Se";
                    subtitle.innerHTML="Teri Batton mein Uljha Jiya";
                    audioimg.style.backgroundImage="url('https://c.saavncdn.com/186/Tum-Se-From-Teri-Baaton-Mein-Aisa-Uljha-Jiya-Hindi-2024-20240202001003-500x500.jpg')";
                }
    
                else  if(crnindex == 6)
                {
                    maintitle.innerHTML="Gulabi Sadi";
                    subtitle.innerHTML="Sanju Rathod";
                    audioimg.style.backgroundImage="url('https://c.saavncdn.com/593/Gulabi-Sadi-Marathi-2024-20240220043332-500x500.jpg')";
                }
            playtrack();
            
        }