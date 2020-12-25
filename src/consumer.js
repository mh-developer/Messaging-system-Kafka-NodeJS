const { Kafka } = require('kafkajs')
const config = require('./config')

const kafka = new Kafka({
  clientId: config.kafka.CLIENTID,
  brokers: config.kafka.BROKERS
})

const topic = config.kafka.TOPIC
const consumer = kafka.consumer({
  groupId: config.kafka.GROUPID
})

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: true })
  await consumer.run({
    eachMessage: async ({ message }) => {
      try {
        const jsonObj = JSON.parse(message.value.toString())
        let ogledInfo = filterOgledInfo(jsonObj)
        if (ogledInfo) {
          console.log(
            '******* Informacije o ogledu *********',
            ogledInfo
          )
        }
      } catch (error) {
        console.log('err=', error)
      }
    }
  })
}

function filterOgledInfo(jsonObj) {
  let returnVal = null

  console.log(`Prejet je ogled ${jsonObj.OgledID}.`)

  // if (jsonObj.Prireditev.length >= 1 && jsonObj.Kraj.length == 1) {
  if (true) {
    returnVal = jsonObj
  }

  return returnVal
}

run().catch(e => console.error(`[example/consumer] ${e.message}`, e))


module.exports = {
  filterPassengerInfo: filterOgledInfo
}
