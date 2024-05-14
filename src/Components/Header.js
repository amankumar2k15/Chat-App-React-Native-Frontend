import React from 'react'
import { Image, Text, View } from 'react-native'

const Header = ({ screenName }) => {

    return (
        <View>
            <View className="flex flex-row justify-between items-center py-[10px] border-b-[1px] border-[#F5F5F5] px-1 pb-2">
                <View>
                    <Image source={require("../../assets/img/AddButton.png")} />
                </View>
                <View>
                    <Text className="font-bold text-lg">{screenName}</Text>
                </View>
                <View>
                    <Image source={require("../../assets/img/ProfileIcon.png")} />
                </View>
            </View>
        </View>
    )
}

export default Header
