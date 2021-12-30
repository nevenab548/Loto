
const Ticket = () => {
    return (
        <div className={'container ticketNum'}>
            <div className={"row justify-content-center"}>
                <input id={'numOne'} className="inputTicket" type={'number'} min={1} max={39}/>
                <input id={'numTwo'} className="inputTicket" type={'number'} min={1} max={39}/>
                <input id={'numThree'} className="inputTicket" type={'number'} min={1} max={39}/>
                <input id={'numFour'} className="inputTicket" type={'number'} min={1} max={39}/>
                <input id={'numFive'} className="inputTicket" type={'number'} min={1} max={39}/>
                <input id={'numSix'} className="inputTicket" type={'number'} min={1} max={39}/>
                <input id={'numSeven'} className="inputTicket" type={'number'} min={1} max={39}/>
            </div>
            <button className="btn btn-primary btn-block" id={'ticketSubmit'}>Napravi tiket</button>
        </div>
    )
}

export default Ticket