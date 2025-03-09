const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashString: any = async (password: any): Promise<any> => {
    const hashedPass= await bcrypt.hash(password, saltRounds)
    return hashedPass
}
export const isHashSame: any = async (password: any, hash:any): Promise<any> => {
    const isPasswordSame= await bcrypt.compare(password, hash)
    return isPasswordSame
}



/*


BUG:
const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashString: any = async (password: any): Promise<any> => {
    console.log(password, '---->password')
    await bcrypt.hash(password, saltRounds, function (err, hash) {
        // Store hash in your password DB.
        console.log(hash, '---->hashhhhh')

        // return String(hash);
    })
}

*/