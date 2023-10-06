class BankAccount {
    constructor() {
        this.saldo = 0;
        this.show = document.getElementById("show").textContent;
    }


    tambahSaldo() {
        let input = prompt("Masukkan Saldo");
        let balance = parseFloat(input);
        if (isNaN(balance)) {
            alert("Input invalid"); // memastikan input adalah number
        } else {
            if (balance < 99.99 || balance > 9999999.99) {
                alert("Input must be between 99.99-9999999.99"); // cek input antara 99.99-9999999.99
            } else {
                this.saldo += balance;
                console.log(this.saldo);
                this.show= this.saldo.toFixed(2);
                alert(
                    `Saldo berhasil ditambahkan \nSaldo Anda : Rp ${this.saldo.toFixed(2)}`
                );
            }
        }
    }

    kurangiSaldo() {
        let input = prompt("Masukkan Saldo");
        let balance = parseFloat(input);
        if (isNaN(balance)) {
            alert("Input invalid"); // memastikan input adalah number
        } else {
            if (balance < 99.99 || balance > 9999999.99) {
                alert("Input must be between 99.99-9999999.99"); // cek input antara 99.99-9999999.99
            } else {
                this.saldo -= balance;
                if (this.saldo < 0) {
                    alert("Gagal ditambahkan. Saldo Anda negatif"); // alert kalau saldo negatif
                } else {
                    console.log(this.saldo);
                    this.show = this.saldo.toFixed(2);
                    alert(
                        `Saldo berhasil ditambahkan \nSaldo Anda : Rp ${this.saldo.toFixed(2)}`
                    );
                }
            }
        }
    }
}

const bankAccount = new BankAccount;