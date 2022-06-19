import './Splash.css';

export function Splash() {

    setTimeout(() => {
        let wipe = document.getElementsByClassName('verticalWipe')[0];
        let brandContainer = document.querySelectorAll('.brand');
        console.log(brandContainer);


        setTimeout(() => {
            wipe!.setAttribute("style", "top:-100vh")
        }, 3000)


        setTimeout(() => {
            brandContainer!.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 400)
            });
        });


        setTimeout(() => {
            brandContainer!.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            });
        }, 2000);


    })

    return (
        <>
            <div className='verticalWipe'></div>
            <div className='brandContainer'>
                <span className='brand brandName'>EDGEWARE</span>
                <span className='brand brandProduct'>THERMOSTAT</span>
            </div>
        </>
    )
};