
document.getElementById('btn1').addEventListener("click",function(){
    const input=document.getElementById('input1');
    const inputText=parseFloat(input.value);
    const text = document.getElementById('title1').innerText;
    if(isNaN(inputText)){
        console.log(alert("Invalid Input"))
        input.value=' '
    }else{
        const totalBalance=document.getElementById('total-balance').innerText;
        if(totalBalance>=inputText){
            const  totalCoin= document.getElementById("total-coin")
        const balance=parseFloat(totalCoin.innerText)
        const newBalance= inputText + balance;
        totalCoin.innerText=newBalance;
        const totalBalance= document.getElementById('total-balance');
        const totalBalanceCurrent= parseFloat(totalBalance.innerText );
        const currentBalance= totalBalanceCurrent - inputText;
        totalBalance.innerText=currentBalance;
        input.value=''
            document.getElementById('popup').style.display= 'flex'
            document.getElementById('popup').style.position= 'fixed'
            document.getElementById('popup').style.top= '20%'
            document.getElementById('popup').style.left= '20%'
            document.getElementById('popup').style.width= '50%'
            const entry=document.getElementById('history-container')
            const historyItem=document.createElement('div')
            historyItem.className=
            "text-xl bg-white rounded-lg shadow-lg my-2 p-8 w-10/12 mx-auto"
            historyItem.innerHTML=`
            <p>${inputText} ${text})</p>
            <p>${new Date().toLocaleDateString()}</p>
            `
            entry.insertBefore(historyItem,entry.firstChild)
        }else{
            console.log(alert('invalid amount'))
             input.value=''
        }
    }
})
document.getElementById('btn2').addEventListener("click",function(){
    const input=document.getElementById('input2');
    const inputText=parseFloat(input.value);
    const text=document.getElementById('title2').innerText;
    if(isNaN(inputText)){
        console.log(alert("Invalid Input"))
        input.value= ''
    }else{
      const totalBalance= document.getElementById('total-balance').innerText;
      const man = 0;
      if(totalBalance>inputText){
        const  totalCoin= document.getElementById("total-coin2")
        const balance=parseFloat(totalCoin.innerText);
        const newBalance=balance+inputText;
         totalCoin.innerText=newBalance;
         const totalBalance=document.getElementById('total-balance');
         const totalCurrentBalance= parseFloat(totalBalance.innerText);
         const currentBalance=totalCurrentBalance-inputText;
         totalBalance.innerText=currentBalance
         input.value=''
             document.getElementById('popup').style.display= 'flex'
             document.getElementById('popup').style.position= 'fixed'
             document.getElementById('popup').style.top= '20%'
             document.getElementById('popup').style.left= '20%'
             document.getElementById('popup').style.width= '50%'
             const entry=document.getElementById('history-container')
             const historyItem=document.createElement('div')
             historyItem.className=
             "text-xl bg-white rounded-lg shadow-lg my-2 p-8 w-10/12 mx-auto"
             historyItem.innerHTML=`
             <p>${inputText} ${text})</p>
             <p>${new Date().toLocaleDateString()}</p>
             `
             entry.insertBefore(historyItem,entry.firstChild)
      }else{
        console.log(alert('amount nai'))
         input.value=''
      }
    }
})
document.getElementById('btn3').addEventListener("click",function(){
    const input=document.getElementById('input3');
    const inputText=parseFloat(input.value);
    const text=document.getElementById('title3').innerText;
    if(isNaN(inputText)){
        console.log(alert('Invalid Input'))
        input.value=''
    }else{
        const totalBalance= document.getElementById('total-balance').innerText;
       if(totalBalance>inputText){
        const  totalCoin= document.getElementById("total-coin3")
        const balance = parseFloat(totalCoin.innerText)
        const newBalance=balance+inputText;
        totalCoin.innerText=newBalance;
        const totalBalance=document.getElementById('total-balance');
        const totalCurrentBalance=parseFloat(totalBalance.innerText);
        const currentBalance= totalCurrentBalance - inputText;
        totalBalance.innerText=currentBalance
        input.value=''
            document.getElementById('popup').style.display= 'flex'
            document.getElementById('popup').style.position= 'fixed'
            document.getElementById('popup').style.top= '20%'
            document.getElementById('popup').style.left= '20%'
            document.getElementById('popup').style.width= '50%'
            const entry=document.getElementById('history-container')
            const historyItem=document.createElement('div')
            historyItem.className=
            "text-xl bg-white rounded-lg shadow-lg my-2 p-8 w-10/12 mx-auto"
            historyItem.innerHTML=`
            <p>${inputText} ${text})</p>
            <p>${new Date().toLocaleDateString()}</p>
            `
            entry.insertBefore(historyItem,entry.firstChild)
        }else{
            console.log(alert('amount nai '))
             input.value=''
        }
       }
        
    })
    
    document.getElementById('popup-btn').addEventListener("click",function(){
          document.getElementById('popup').style.display='none'
    })
    const historyTab=document.getElementById('history-btn')
    const donationTab=document.getElementById('donation-btn')
    const blogBtn=document.getElementById('blog-btn')
    document.getElementById('donation-btn').addEventListener('click',function(){
        donationTab.classList.add(
            'text-white',
            'bg-green-500'
        )
        historyTab.classList.remove(
            'text-white',
            'bg-green-500'
        )
        blogBtn.classList.remove(
            'text-white',
            'bg-green-500'
        )
         blogBtn.classList.add(
            'text-white'
        )
        document.getElementById('history-container').classList.add('hidden')
        document.getElementById('footer-section').classList.remove('hidden')
        document.getElementById('faq-section').classList.add('hidden')
        document.getElementById('donation-container').classList.remove('hidden')

    })
    document.getElementById('history-btn').addEventListener('click',function(){
        historyTab.classList.add(
            'text-white',
            'bg-green-500'
        )
        donationTab.classList.remove(
            'text-white',
            'bg-green-500'
        )
        donationTab.classList.add(
            'text-gray-500'
        )
        blogBtn.classList.remove(
            'text-white',
            'bg-green-500'
        )
         blogBtn.classList.add(
            'text-white'
        )
        document.getElementById('donation-container').classList.add('hidden')
        document.getElementById('footer-section').classList.add('hidden')
        document.getElementById('faq-section').classList.add('hidden')
        document.getElementById('history-container').classList.remove('hidden')
    })
   
    document.getElementById('blog-btn').addEventListener('click',function(){
        blogBtn.classList.add(
            'text-white',
            'bg-green-500'
        )
        historyTab.classList.remove(
            'text-white',
            'bg-green-500'
        )
        donationTab.classList.remove(
            'text-white',
            'bg-green-500'
        )
        donationTab.classList.add(
            'text-gray-500'
        )
        historyTab.classList.add(
            'text-gray-500'
        )
        document.getElementById('donation-container').classList.add('hidden')
        document.getElementById('footer-section').classList.add('hidden')
        document.getElementById('history-container').classList.add('hidden')
        document.getElementById('faq-section').classList.remove('hidden')
    })
   
    // function showSectionById(id){
    //     document.getElementById("btn1").classList.add='hidden'
    //     document.getElementById("btn2").classList.add='hidden'
    //     document.getElementById("btn3").classList.add='hidden'
    //     document.getElementById(id).classList.remove='hidden'
        
    // }
 
function historyContainer(id){
    const historyAdd=document.getElementById('id')
    const p=document.createElement('p')
    p.innerText='hello'
}



