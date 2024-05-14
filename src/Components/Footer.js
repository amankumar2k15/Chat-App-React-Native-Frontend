import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, View } from 'react-native'
import { UserIcon, ChatBubbleOvalLeftIcon } from 'react-native-heroicons/outline'

const Footer = ({ navigation }) => {
    // const currentRouteName = navigation.getCurrentRoute()?.name;
    console.log("currentRouteName is=>", navigation)

    // if (currentRouteName === 'Login' || currentRouteName === 'Register' || currentRouteName === undefined) {
    //     return null;
    // }

    return (
        <View className="flex flex-row justify-between bg-white border-t-[1px] border-[#F5F5F5] py-4 left-0 right-0 px-20 ">
            <View className="flex justify-center items-center">
                <UserIcon color="orange" size={28} />
                <Button title="Contact" className="bg-none text-orange-400"
                    onPress={() =>
                        navigation.navigate('Contact')
                    }
                />
            </View>
            <View className="flex justify-center items-center">
                <ChatBubbleOvalLeftIcon color="black" size={28} />
                <Button title="Chats"
                    onPress={() =>
                        navigation.navigate('ChatRoom')
                    }
                />
            </View>
        </View>
    )
}

export default Footer