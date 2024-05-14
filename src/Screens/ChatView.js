import React from 'react'
import { Dimensions, Text, View } from 'react-native'

const ChatView = () => {
    const deviceHeight = Dimensions.get('window').height;

    return (
        <View className="flex gap-4 items-end pt-10 px-4" style={{ height: deviceHeight - 150 }}>
            <View className="w-[250px] px-4 flex justify-center items-center rounded-3xl bg-[#F5F5F5] h-[85px]"><Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Text></View>
            <View className="w-[250px] px-4 flex justify-center items-center rounded-3xl bg-[#FF9134] h-[85px]"><Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Text></View>
            <View className="w-[250px] px-4 flex justify-center items-center rounded-3xl bg-[#F5F5F5] h-[85px]"><Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Text></View>
            <View className="w-[250px] px-4 flex justify-center items-center rounded-3xl bg-[#FF9134] h-[85px]"><Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Text></View>
            <View className="w-[250px] px-4 flex justify-center items-center rounded-3xl bg-[#F5F5F5] h-[85px]"><Text className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Text></View>
        </View>
    )
}

export default ChatView
