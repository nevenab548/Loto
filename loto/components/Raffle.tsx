
const Raffle = () => {
    return (
        <div className='raffle'>
            <div className='nextJackpot'><p className='regWeight'>Sledece izvlacenje:</p>
                <p>Ovde ce da bude datum sledeceg</p>
                <p className='gameJackpot'>Ovde ce da bude suma</p>
            </div>
            <p className='regWeight'>Izvuceni brojevi:</p>
            <p>Datum izvlacenja</p>
            <div className='gamePageBalls'>
                <p className='wnBalls'><span className='balls' title='2'>2</span><span className='wnDash'>-</span><span
                    className='balls' title='6'>6</span><span className='wnDash'>-</span><span className='balls'
                                                                                               title='9'>9</span><span
                    className='wnDash'>-</span><span className='balls' title='33'>33</span><span
                    className='wnDash'>-</span><span
                    className='balls' title='39'>39</span><span className='wnDash sbDash'>-</span><span
                    className='balls pbBall' title='Powerball 11'>11</span><span className='wnDash'>-</span><span
                    className='balls multiplier' title='13'>13</span></p>
                <p className='powerball rolloverOrWinners'>0 pobednika </p></div>
        </div>
    )
}

export default Raffle