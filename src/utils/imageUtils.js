export const getBuildingImage = (building) => {
    if (building === 'CB2') {
        return '/images/CB2.jpg'
    }

    if (building === 'SIT') {
        return '/images/SIT.jpg'
    }

    return '/images/lx.jpg'
}