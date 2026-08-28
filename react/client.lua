while GetResourceState('redutzu-mdt') ~= 'started' do
    Wait(500)
end

local resource = GetCurrentResourceName()

local function RegisterPage()
    local success, message = exports['redutzu-mdt']:RegisterPage({
        name = 'react-template',
        label = 'React/Typescript Template',
        icon = 'target', -- a Lucide icon name (https://lucide.dev/icons, kebab-case)
        category = 'custom',
        url = ('https://cfx-nui-%s/nui/dist/index.html'):format(resource)
    })

    if not success then
        print('Failed to register custom page: ', message)
    end
end

RegisterPage()

AddEventHandler('onResourceStart', function(resource)
    if resource == 'redutzu-mdt' then
        RegisterPage()
    end
end)

RegisterNUICallback('ping', function(data, cb)
    cb({ time = GetGameTimer(), data = data })
end)
