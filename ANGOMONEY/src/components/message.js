export function ErrorMessage(message){
    return(
    `   <div class="errorCard">
            <div>
                ${message}
            </div>
            <button clss="okButton" id="okButton">ok</button>
        </div>`
    )
}
