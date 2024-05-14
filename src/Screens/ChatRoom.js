import React from 'react'
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { chatsData } from '../../data/Data'

const ChatRoom = ({screenName}) => {
    const deviceHeight = Dimensions.get('window').height;
    // console.log(deviceHeight)
    // const deviceWidth = Dimensions.get('window').width;

    return (
        <View className={`pt-4 flex gap-10`}>
            {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
            <ScrollView vertical={true} showsVerticalScrollIndicator={false} style={{ height: deviceHeight - 150 }}>
                {chatsData.map((item)=>{
                    return(
                    <TouchableOpacity key={item.id}>
                    <View className="flex justify-between flex-row px-2 py-4 border-b-[1px] border-[#F5F5F5]">
                        <View className="flex flex-row items-center gap-2">
                            <View>
                                <Image className="w-[52px] h-[52px]" source={item.img} />
                            </View>
                            <View>
                                <View>
                                    <Text className="text-black font-bold text-[18px]">{item.name}</Text>
                                    <Text className="text-orange-400 text-[14px]">{item.message}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text className="text-slate-400 mt-1">{item.time}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    )
                })}
            </ScrollView>


        </View>
    )
}

export default ChatRoom

                // <FlatList
                //     data={chatsData}
                //     keyExtractor={({ id }) => id.toString()}
                //     renderItem={({ item }) => (
                    
                //     )}
                // />