local QBCore = exports['qb-core']:GetCoreObject()

-- Custom notification function
local function sendNotification(title, message, type, duration, position)
    local icons = {
        info = 'fa-info-circle',
        success = 'fa-check-circle',
        error = 'fa-times-circle',
        warning = 'fa-exclamation-triangle'
    }

    local pos = Config.NotificationPositions[position or Config.NotifyPosition]
    SendNUIMessage({
        action = 'notify',
        title = title,
        message = message,
        type = type,
        icon = icons[type] or 'fa-info-circle', -- Default icon if type not found
        duration = duration,
        position = pos
    })
end

-- Register test commands
RegisterCommand('notify_info', function()
    sendNotification('Info Title', 'This is an info notification', 'info', 5000)
end, false)

RegisterCommand('notify_success', function()
    sendNotification('Success Title', 'This is a success notification', 'success', 5000)
end, false)

RegisterCommand('notify_error', function()
    sendNotification('Error Title', 'This is an error notification', 'error', 5000)
end, false)

RegisterCommand('notify_warning', function()
    sendNotification('Warning Title', 'This is a warning notification', 'warning', 5000)
end, false)

RegisterCommand('allnotifys', function()
    sendNotification('Info Title', 'This is an info notification', 'info', 5000)
    sendNotification('Warning Title', 'This is a warning notification', 'warning', 5000)
    sendNotification('Success Title', 'This is a success notification', 'success', 5000)
    sendNotification('Error Title', 'This is an error notification', 'error', 5000)
end, false)

-- Register as an export
exports('sendNotification', sendNotification)
