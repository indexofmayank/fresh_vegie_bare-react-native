import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        { image: require('../assets/slider/sliderfour.jpg'), id: 1 },
        { image: require('../assets/slider/slidertwo.jpg'), id: 2 },
        { image: require('../assets/slider/sliderone.jpg'), id: 3 },
        // Add more images as needed
      ],
    };
    this.carouselRef = React.createRef();
  }

  componentDidMount() {
    this.startCarouselAutoPlay();
  }

  componentWillUnmount() {
    clearTimeout(this.carouselTimer);
  }

  startCarouselAutoPlay = () => {
    this.carouselTimer = setTimeout(() => {
      let newIndex = this.state.activeIndex + 1;
      if (newIndex >= this.state.carouselItems.length) {
        newIndex = 0;
      }
      this.carouselRef.current.snapToItem(newIndex);
      this.setState({ activeIndex: newIndex });
      this.startCarouselAutoPlay();
    }, 3000); // Adjust the interval (in milliseconds) as needed
  };

  handleItemClick = (index) => {
    const selectedItem = this.state.carouselItems[index];
    if (selectedItem) {
      Alert.alert(`Clicked Item ${selectedItem.id}`, `You clicked on item ${selectedItem.id}`);
      // Handle your click logic here
    } else {
      console.warn(`Item at index ${index} is undefined`);
    }
  };

  renderItem = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.handleItemClick(index)}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <View >
        <Carousel
          ref={this.carouselRef}
          layout="default"
          data={this.state.carouselItems}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          renderItem={this.renderItem}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
          loop={true}
          autoplay={false} // Disable autoplay since we manage it manually
        />
        <Pagination
          dotsLength={this.state.carouselItems.length}
          activeDotIndex={this.state.activeIndex}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  imageContainer: {
    width: screenWidth,
    height: 200, // Adjust height as needed
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paginationContainer: {
    paddingVertical: 8, // Adjust padding as needed
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});

export default Slider;
