import  * as jose from 'jose'

export function  Test() {
    const v=async ()=>{
        const secret = new TextEncoder().encode(
            'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
          )
          const alg = 'HS256'
          
          const jwt =  await new jose.SignJWT({ 'urn:example:claim': true })
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setIssuer('urn:example:issuer')
            .setAudience('urn:example:audience')
            .setExpirationTime('2h')
            .sign(secret)
         const data = await jwt;
         
         console.log(data)

        }
        v()
    return (
        <div>
            <h1>Hola mundo</h1>
        </div>
    )
}
export default Test