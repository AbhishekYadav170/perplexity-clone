// import { tavily as Tavily } from "@tavily/core"

// const tavily = Tavily({
//     apiKey: process.env.TAVILY_API_KEY,
// })


// export const searchInternet = async ({ query }) => {
//     const results = await tavily.search(query, {
//         maxResults: 5,
        
//     })

//     console.log(JSON.stringify(results))

//     return JSON.stringify(results)
// }




// import { tavily as Tavily } from "@tavily/core";

// const tavily = Tavily({
//     apiKey: process.env.TAVILY_API_KEY,
// });


// export const searchInternet = async ({ query }) => {
//     try {

//         const lowerQuery = query.toLowerCase();

//         // ==========================================
//         // DETECT SEARCH TIME
//         // ==========================================

//         const isCurrentQuery =
//             lowerQuery.includes("today") ||
//             lowerQuery.includes("latest") ||
//             lowerQuery.includes("current") ||
//             lowerQuery.includes("breaking") ||
//             lowerQuery.includes("now") ||
//             lowerQuery.includes("recent");


//         const isHistoricalQuery =
//             lowerQuery.includes("months ago") ||
//             lowerQuery.includes("month ago") ||
//             lowerQuery.includes("weeks ago") ||
//             lowerQuery.includes("week ago") ||
//             lowerQuery.includes("years ago") ||
//             lowerQuery.includes("year ago") ||
//             lowerQuery.includes("in 2026") ||
//             lowerQuery.includes("in 2025") ||
//             lowerQuery.includes("in 2024") ||
//             lowerQuery.includes("january") ||
//             lowerQuery.includes("february") ||
//             lowerQuery.includes("march") ||
//             lowerQuery.includes("april") ||
//             lowerQuery.includes("may") ||
//             lowerQuery.includes("june") ||
//             lowerQuery.includes("july") ||
//             lowerQuery.includes("august") ||
//             lowerQuery.includes("september") ||
//             lowerQuery.includes("october") ||
//             lowerQuery.includes("november") ||
//             lowerQuery.includes("december");


//         // ==========================================
//         // SEARCH OPTIONS
//         // ==========================================

//         const searchOptions = {
//             maxResults: 8,
//             topic: "news",
//         };


//         // ==========================================
//         // CURRENT NEWS
//         // ==========================================

//         if (isCurrentQuery && !isHistoricalQuery) {

//             searchOptions.timeRange = "day";

//             console.log("Searching CURRENT news:", query);
//         }


//         // ==========================================
//         // HISTORICAL NEWS
//         // ==========================================

//         else if (isHistoricalQuery) {

//             // Historical query ko date ke according
//             // search karne denge.
//             //
//             // Yahan "day" / "week" filter nahi lagayenge.

//             console.log("Searching HISTORICAL news:", query);
//         }


//         // ==========================================
//         // NORMAL SEARCH
//         // ==========================================

//         else {

//             console.log("Searching GENERAL information:", query);
//         }


//         // ==========================================
//         // TAVILY SEARCH
//         // ==========================================

//         const results = await tavily.search(
//             query,
//             searchOptions
//         );


//         console.log(
//             JSON.stringify(results)
//         );


//         return JSON.stringify(results);

//     } catch (error) {

//         console.error(
//             "Tavily Search Error:",
//             error
//         );

//         return JSON.stringify({
//             error:
//                 "Unable to fetch information from the internet."
//         });
//     }
// };






import { tavily as Tavily } from "@tavily/core";

const tavily = Tavily({
    apiKey: process.env.TAVILY_API_KEY,
});


export const searchInternet = async ({ query }) => {

    try {

        const lowerQuery = query.toLowerCase();

        const isCurrentQuery =
            lowerQuery.includes("today") ||
            lowerQuery.includes("current") ||
            lowerQuery.includes("latest") ||
            lowerQuery.includes("breaking") ||
            lowerQuery.includes("now") ||
            lowerQuery.includes("recent");


        const searchOptions = {
            maxResults: 8,
            topic: "news",
        };


        if (isCurrentQuery) {

            searchOptions.timeRange = "day";

            console.log(
                "CURRENT NEWS SEARCH:",
                query
            );

        } else {

            console.log(
                "HISTORICAL / GENERAL SEARCH:",
                query
            );
        }


        const results = await tavily.search(
            query,
            searchOptions
        );


        console.log(
            JSON.stringify(results)
        );


        return JSON.stringify(results);

    } catch (error) {

        console.error(
            "Tavily Search Error:",
            error
        );

        return JSON.stringify({
            error:
                "Unable to fetch information from the internet."
        });
    }
};