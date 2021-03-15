
bucketList = []

let i = 0

let t = 0
let doneBucketList = false

while(doneBucketList  == false){
   bucketList [i] = prompt ('Enter a bucket list item')
    i++
    doneBucketList = confirm("Press 'OK' to see your list or 'Cancel' to add an additional item:")
    }
    
while (t < bucketList.length){
    console.log(bucketList[t])
    t++
}
