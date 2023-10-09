import httpInstance from "@/utils/http";

export function getCategorys() {
    return httpInstance({
        url:'home/category/head'
    })
}