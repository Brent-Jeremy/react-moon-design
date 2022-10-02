import fire from '../assets/images/fire.png'

const VBone = () => {
  return (
    <div className='vbone'>
      <span>
        <img src={fire} alt='' />
        <p>
          Dead wallets contain unretrievable coins that will accrue reflection
          rewards thereby burning those rewarded coins. This makes VBONE a
          deflationary reward coin for the holders.
        </p>
      </span>

      <div>
        <p>
          - <a href='https://www.disney.com'>0.69696969696969%</a> of the total VBONE supply sent to
          Vitalik’s wallet (Burn wallet 1)
        </p>
        <p>
          - <a href='https://www.disney.com'>42.0420420420420%</a> of the total VBONE supply sent to
          Dead Burn wallet (Burn wallet 2)
        </p>
      </div>
    </div>
  )
}
export default VBone
