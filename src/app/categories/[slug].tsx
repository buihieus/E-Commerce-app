import { Redirect, useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../../../assets/categories'

const Category = () => {
  const { slug } = useLocalSearchParams<{ slug: string}>()
  
  const category = CATEGORIES.find(cat => cat.slug === slug)

  if (!category) return <Redirect href="/404" />

  
  return (
    <View>
      <Text>Category</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})