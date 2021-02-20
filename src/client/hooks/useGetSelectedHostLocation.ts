import { LatLngLiteral } from "@googlemaps/google-maps-services-js"
import { useState } from "react"

export const useGetSelectedHostLocation = () => {
    const [selectedHostLocation, setSelectedHostLocation] = useState<LatLngLiteral>();

    return { selectedHostLocation, setSelectedHostLocation };
}