// 01
// const promise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('hello world')
//         }, 2000);
//     })
// }

// promise()

// 02
// const weather = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const temperature  = 2
//         if (temperature <= 10) {
//             resolve('Il fait froid')
//         }else{
//             reject('Il fait chaud')
//         }
//         }, 4000);
//     })
// }

// const waitForResult = async () => {
//     const result = await weather()
//     console.log(result)
//   }
  
// waitForResult()


// 03
// const lessive = () => {
//     return new Promise((resolve, reject) => {
//         console.log("je commence la lessive")
//         setTimeout(() => {
//             const laLessive  = true
//         if (laLessive) {
//             resolve("j'ai fini la lessive")
//         }else{
//             reject("Je n'ai pas fini la lessive")
//         }
//         }, 3000);
//     })
// }

// const laLessiveEstFaite = async () => {
//     const result = await lessive()
//     console.log(result)
//     console.log("j'ai fini de faire le ménage")
//   }
  

// const vaisselle = () => {
//     return new Promise((resolve, reject) => {
//         console.log("je commence la vaisselle")
//         setTimeout(() => {
//             const lavaisselle  = true
//         if (lavaisselle) {
//             resolve("j'ai fini la vaisselle")
//         }else{
//             reject("Je n'ai pas fini la vaisselle")
//         }
//         }, 1500);
//     })
// }

// const lavaisselleEstFaite = async () => {
//     const result = await vaisselle()
//     console.log(result)
//   }

// const menage = () => {
//     laLessiveEstFaite()
//     lavaisselleEstFaite()
// }

// menage()