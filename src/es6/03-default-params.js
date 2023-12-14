function newUser(name, age, country) {
    var name = name || 'Rodrigo'
    var age = age || 25
    var country = country || 'MX'
    console.log(name, age, country)

}

newUser()
newUser('Miguel', 30, 'CO')

function newAdmin(name = 'Carlos', age = 25, country = 'PE') {
    console.log(name, age, country)
}

newAdmin();
newAdmin('Ana', 28, 'EUA')