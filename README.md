# RAY-NOTIFICATIONS SCRIPT 
![image](https://github.com/raymanins/ray-notifications/assets/145383215/815a3737-a382-40d7-b329-99e4f1ce1953)


# INSTALATION FOR QB

- Replace the QBCore.Functions.Notify() function in ./qb-core/client/functions.lua:128

```
function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = ttext,
            caption = caption
        })
    else
        texttype = texttype or 'primary'
        length = length or 5000
        SendNUIMessage({
            action = 'notify',
            type = texttype,
            length = length,
            text = text
        })
    end
end
```

- Replace the above code with the following
```
QBCore.Functions.Notify = function(text, texttype, length)
    local title, message

    if type(text) == "table" then
        message = text.text or 'Placeholder'
        title = text.caption or 'Placeholder'
    else
        message = text
        title = 'Notification'
    end

    texttype = texttype or 'primary'
    length = length or 5000

    -- Use the sendNotification export
    exports['ray-notifications']:sendNotification(title, message, texttype, length)
end
```
